// Simple calorie tracker using localStorage
const LS_KEY = 'calorie-tracker:entries'

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,8) }

function loadEntries(){
  try{ const raw = localStorage.getItem(LS_KEY); return raw ? JSON.parse(raw) : [] }catch(e){console.error(e); return []}
}

function saveEntries(entries){ localStorage.setItem(LS_KEY, JSON.stringify(entries)) }

function addEntry(entry){ const entries = loadEntries(); entries.push(entry); saveEntries(entries); return entries }
function updateEntry(id, patch){ const entries = loadEntries().map(e=> e.id===id? {...e,...patch}: e); saveEntries(entries); return entries }
function deleteEntry(id){ const entries = loadEntries().filter(e=> e.id!==id); saveEntries(entries); return entries }

// UI
const form = document.getElementById('entryForm')
const nameIn = document.getElementById('name')
const caloriesIn = document.getElementById('calories')
const dateIn = document.getElementById('date')
const mealIn = document.getElementById('meal')
const entriesList = document.getElementById('entriesList')
const totalsEl = document.getElementById('totals')
const filterDate = document.getElementById('filterDate')
const filterBtn = document.getElementById('filterBtn')
const resetFilterBtn = document.getElementById('resetFilterBtn')
const clearBtn = document.getElementById('clearBtn')
const weekChart = document.getElementById('weekChart')

function formatDate(d){ const dt = new Date(d); return dt.toLocaleDateString() }

function renderEntries(entries){ entriesList.innerHTML = '';
  entries.sort((a,b)=> new Date(b.date)-new Date(a.date)).forEach(e=>{
    const li = document.createElement('li')
    const left = document.createElement('div')
    left.innerHTML = `<div><strong>${e.name}</strong> <span class="entry-meta">(${e.meal})</span></div><div class="entry-meta">${formatDate(e.date)}</div>`
    const right = document.createElement('div')
    right.innerHTML = `<div><strong>${e.calories} kcal</strong></div>`
    const actions = document.createElement('div')
    actions.className = 'entry-actions'
    const edit = document.createElement('button')
    edit.innerText = 'Edit'
    edit.onclick = ()=> startEdit(e)
    const del = document.createElement('button')
    del.innerText = 'Delete'
    del.onclick = ()=> { if(confirm('Delete this entry?')) { const newEntries = deleteEntry(e.id); renderEntries(newEntries); renderTotals(newEntries); renderChart(newEntries) } }
    actions.appendChild(edit); actions.appendChild(del)
    li.appendChild(left); li.appendChild(right); li.appendChild(actions)
    entriesList.appendChild(li)
  }) }

function renderTotals(entries){ const total = entries.reduce((s,e)=> s + Number(e.calories), 0); totalsEl.innerText = `Total: ${total} kcal` }

function renderChart(entries){ // 7-day total ending today
  const days = Array.from({length:7}).map((_,i)=>{
    const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() - (6 - i));
    return {date: d.toISOString().slice(0,10), total: 0}
  })
  entries.forEach(e=>{ const idx = days.findIndex(d=> d.date === e.date); if(idx>=0) days[idx].total += Number(e.calories) })

  const ctx = weekChart.getContext('2d')
  ctx.clearRect(0,0,weekChart.width,weekChart.height)
  const w = weekChart.width; const h = weekChart.height; const pad = 20
  const max = Math.max(50, ...days.map(d=>d.total))
  const barW = (w - pad*2) / days.length - 8
  days.forEach((d,i)=>{
    const x = pad + i*(barW+8)
    const barH = (d.total / max) * (h - pad*2)
    ctx.fillStyle = '#0ea5a4'
    ctx.fillRect(x, h - pad - barH, barW, barH)
    ctx.fillStyle = '#0f172a'
    ctx.font = '12px sans-serif'
    ctx.fillText(`${d.total}`, x, h - pad - barH - 6)
    ctx.fillText(new Date(d.date).toLocaleDateString(undefined,{month:'short',day:'numeric'}), x, h - 6)
  })
}

function startEdit(entry){ nameIn.value = entry.name; caloriesIn.value = entry.calories; dateIn.value = entry.date; mealIn.value = entry.meal; form.dataset.editing = entry.id; form.querySelector('button[type=submit]').innerText = 'Save' }

form.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  const payload = { id: form.dataset.editing || uid(), name: nameIn.value.trim(), calories: Number(caloriesIn.value), date: dateIn.value, meal: mealIn.value }
  if(!payload.name || !payload.date || Number.isNaN(payload.calories)) return alert('Invalid input')
  let entries;
  if(form.dataset.editing){ entries = updateEntry(form.dataset.editing, payload); delete form.dataset.editing; form.querySelector('button[type=submit]').innerText = 'Add' }
  else{ entries = addEntry(payload) }
  form.reset(); renderEntries(entries); renderTotals(entries); renderChart(entries)
})

filterBtn.addEventListener('click', ()=>{ const d = filterDate.value; const all = loadEntries(); if(!d) return renderEntries(all); const filtered = all.filter(e=> e.date === d); renderEntries(filtered); renderTotals(filtered); renderChart(filtered) })
resetFilterBtn.addEventListener('click', ()=>{ filterDate.value=''; const all = loadEntries(); renderEntries(all); renderTotals(all); renderChart(all) })
clearBtn.addEventListener('click', ()=> form.reset())

// init
(function(){ const entries = loadEntries(); renderEntries(entries); renderTotals(entries); renderChart(entries); // set default date to today
  dateIn.value = new Date().toISOString().slice(0,10)
})()
