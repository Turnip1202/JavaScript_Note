// 大马1头两石，中马1头1石，小马1头0.5石
//托100石，最多不超过100头
var big, middle, small;

for (big = 1; big <= 50; big++) { 
  for (middle = 1; middle <= 100; middle++) { 
    for (small = 1; small <= 200; small++) { 
      if (big+middle+small===100&&big*2+middle*1+small*0.5===100) { 
          console.log(`大马：${big}  中马：${middle}   小马：${small}`)
      }
    }
  }
}