const array = [
  {id:1 , name: "mon1", qty:10 , seuil:12},
  {id:2 , name: "mon1", qty:10 , seuil:5},
  {id:3 , name: "mon1", qty:10 , seuil:15},
  {id:4 , name: "mon1", qty:14 , seuil:12}
]

//if the qty less than the seuil then add 20 % to qty and return the ,ew array of the objects ;


const filtred = array.filter(m=>m.qty < m.seuil);

console.log(filtred);

const maped = filtred.map((m) => {m.qty = m.qty + (m.qty * 0.2)
    return {
        id:m.id,
        name:m.name,
        qty:m.qty,
        seuil:m.seuil
    }
})

console.log(maped);