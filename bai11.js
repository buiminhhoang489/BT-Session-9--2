const so1 = prompt("so1")
const so2 = prompt("so2")
const so3 = prompt("so3")
const soLonNhat = so1 >= so2 && so1 >= so3 ? so1 : so2>=so1 && so2>=so3 ? so2 :so3
const soNhoNhat = so1 <= so2 && so1 <= so3 ? so1 : so2 <=so1 && so2>=so3 ? so2 :so3
prompt("soLonNhat", soLonNhat)
prompt("soNhoNhat", soNhoNhat)