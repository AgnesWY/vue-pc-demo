// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const simulateData = function () {
  let data = []
  for (let i = 0; i < 8; i++) {
    let arr = {
      name: Random.cname(), 
      date: Random.date(), 
      city: Random.city() 
    }
    data.push(arr)
  }

  return {
    data: data
  }
}

Mock.mock('/user/login', 'get', ()=>{
    return Mock.mock({
        "array|8":[{
            'id|+1':1,
            'name':'@cname',
            'date':'@date',
            'city':'@area',
            'myPic':'@image'
        }]
    });
})

Mock.mock('/api/data', (req, res) => {
    return Mock.mock({
      "array|10": [
        {
          'id|+1': 1,
          'name': '@cname',
          "phoneNumber_1": "1",
          "phoneNumber_2|1": [31,32,33,34,35,36,37,38,39,47,50,51,52,53,55,56,57,58,59,82,83,87,88,89],
          'birthday': '@date("yyyy-MM-dd")',
          'city': '@city(true)'
        }
      ]
    })
  });

