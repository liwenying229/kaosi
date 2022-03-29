let Mock = require("mockjs")

let data = [
    { id: 0, name: "易烊千玺", text: "《少年的你》", browse: "2323", reply: "12" },
    { id: 1, name: "杨紫", text: "《余生请多指教》", browse: "2323", reply: "12" },
    { id: 2, name: "肖战", text: "《陈情令》", browse: "2323", reply: "12" },
    { id: 3, name: "乔欣", text: "《嫣语赋》", browse: "2323", reply: "12" },
    { id: 5, name: "檀健次", text: "《猎罪图鉴》", browse: "2323", reply: "12" },
    { id: 6, name: "易烊千玺", text: "《少年的你》", browse: "2323", reply: "12" },
    { id: 7, name: "杨紫", text: "《余生请多指教》", browse: "2323", reply: "12" },
    { id: 8, name: "肖战", text: "《陈情令》", browse: "2323", reply: "12" },
    { id: 9, name: "乔欣", text: "《嫣语赋》", browse: "2323", reply: "12" },
    { id: 10, name: "檀健次", text: "《猎罪图鉴》", browse: "2323", reply: "12" },
    { id: 11, name: "易烊千玺", text: "《少年的你》", browse: "2323", reply: "12" },
    { id: 12, name: "杨紫", text: "《余生请多指教》", browse: "2323", reply: "12" },
    { id: 13, name: "肖战", text: "《陈情令》", browse: "2323", reply: "12" },
    { id: 14, name: "乔欣", text: "《嫣语赋》", browse: "2323", reply: "12" },
    { id: 15, name: "檀健次", text: "《猎罪图鉴》", browse: "2323", reply: "12" },
    { id: 16, name: "易烊千玺", text: "《少年的你》", browse: "2323", reply: "12" },
    { id: 17, name: "杨紫", text: "《余生请多指教》", browse: "2323", reply: "12" },
    { id: 18, name: "肖战", text: "《陈情令》", browse: "2323", reply: "12" },
    { id: 19, name: "乔欣", text: "《嫣语赋》", browse: "2323", reply: "12" },
    { id: 20, name: "檀健次", text: "《猎罪图鉴》", browse: "2323", reply: "12" },
]
Mock.mock("/api/home", "get", function(config) {
    console.log(config)
    return data
})