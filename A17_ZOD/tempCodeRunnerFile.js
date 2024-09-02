const zod = require("zod");
app.use(express.json());

app.listen(3000, () => {
    console.log(`app is listning on port 3000`);
});

const schema = zod.array(zod.number());

app.get("/", (req,res) => {
    let kidney = req.body.kidney;
    const responce = schema.safeParse(kidney);
    res.send(responce);
})