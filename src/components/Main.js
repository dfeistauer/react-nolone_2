
import Button from "./Button";
import Input from "./Input";

const Main = () => {

    const onClick = () => {
        console.log('click' )
    }

  return (
      <>
        <Input color='black' label='E-Mail-Adresse' type ='email' defaultDF = '@' />
        <Button color='black' text='Anmelden' onClick= {onClick} />
        <Button color='black' text='Registrieren' onClick= {onClick} />
      </>
  )
}

export default Main
