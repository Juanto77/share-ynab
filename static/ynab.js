const ynab = require('ynab')
const accessToken = '123-yourAccessTokenHere-456'
const ynabAPI = new ynab.API(accessToken)

;(async function () {
  const budgetsResponse = await ynabAPI.budgets.getBudgets()
  const budgets = budgetsResponse.data.budgets
  for (let budget of budgets) {
    console.log(`Budget Name: ${budget.name}`)
  }
})()
