// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Logout() {
//     const navigation = useNavigate()
//     const logout = async ()=>{
//         try{
//             const resp = await fetch('/logout', {
//                 method: 'GET',
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 credentials: "include"
//             })
//             if(resp.status === 401 || !resp){
//                 window.alert("Please Logout Later")
//             }else{
//                 navigation('/')
//                 window.location.reload()
//             }
//         }catch(error){
//             console.log(error)
//         }
//     }
//     useEffect(()=>{
//         logout()
//     }, [])
//     return (
//         <div>
            
//         </div>
//     )
// }
