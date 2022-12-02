// @deno-types="npm:@types/express"
import express from "npm:express"
import morgan from "npm:morgan"

const port = 3000
const app = express()
app.use(morgan("dev"))

app.get("/", (_req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
