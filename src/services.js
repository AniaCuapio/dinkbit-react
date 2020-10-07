// url API
const URL_BASE = 'https://dinkbit-api-quick-gelada-ua.mybluemix.net/'

// Entries
const getEntriesService = async () => {
  const response = await fetch(`${URL_BASE}entries`)
  const data = await response.json()
  return data
}

const getEntryService = async key => {
  const response = await fetch(`${URL_BASE}entries/${key}`)
  const data = await response.json()
  return data
}

// Users
const addUserMessageService = async (data) => {
  const response = await fetch(`${URL_BASE}users`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const res = await response.json()
  return res
}

export {
  getEntriesService,
  getEntryService,
  addUserMessageService,
}
