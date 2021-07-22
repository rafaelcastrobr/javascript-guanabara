const n1 = [5,7,52,6,10];

/*
for (let i=0;i<n1.length;i++) {
  console.log(`A posição ${i} tem o valor ${n1[i]}`)
}
*/

for (let i in n1) {
  console.log(`A posição ${i} tem o valor ${n1[i]}`)
}