import Nav from "../components/Nav";
import Banner from "../components/Banner";
import PermissionNotification from "../components/PermissionNotification";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function MainPage() {

  const isAccessed = useSelector((state: RootState) => state.access.isAccessed);

  return (
    <>
      <Nav></Nav>
      {isAccessed && <PermissionNotification></PermissionNotification>}
      <Banner></Banner>
    </>
  )
}