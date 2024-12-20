import Header from "./components/Header";
import { Container } from "@mui/material";
import AppDrawer from "./components/AppDrawer";
import { Outlet } from "react-router";

// function Item(props){
//   return <li>
//     {props.conent} by {props.user}
//   </li>
// }

// function Item({content,user}){
//   return <li>
//     {content} by {user}
//   </li>
// }

// function List({children}){
//   return <ul>{children}</ul>
// }

// export default function App(){
//   return <di>
//     <h1>Hello REact</h1>
//     <p>Using Vite</p>
//     <ul>
//       <Item content="Apple" user="Alice"/>
//       <Item content="Orange" user="Bob"/>
//       <Item content="Mango" user="John"/>
//     </ul>
//   </di>
// }

export default function App() {


  return (
    <div>
      <Header />
      <AppDrawer/>
      <Container sx={{ mt: 2 }} maxWidth="md">
        <Outlet></Outlet>
      </Container>
    </div>
  );
}
