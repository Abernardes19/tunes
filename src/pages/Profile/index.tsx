import { useState } from "react";
import EditCard from "../../components/EditCard";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";

export default function Profile() {
  const [checked, setChecked] = useState(false as boolean);

  const toggleSwitch = () => {
    setChecked(!checked);
  }
  return (
    <div>
      <Header />
      { !checked ? (
        <ProfileCard checked={checked} toggleSwitch={toggleSwitch} />
      ) : (
        <EditCard checked={checked} toggleSwitch={toggleSwitch}  />
      ) }
      
    </div>
  )
}