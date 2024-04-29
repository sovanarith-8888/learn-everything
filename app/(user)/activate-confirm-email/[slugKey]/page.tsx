import Icons from "@/components/icons/FontAwesome"

type PropsType = {
  params: {
    slugKey: string
  },
  searchParams: any
}
import styles from './style.module.css'
import Button from "./components/Button"
const ConfirmEmail = (props: PropsType) => {
  return (
    <main className={styles.container}>
      <section>
        <Icons.circleCheck/>
        <h1 className="text-4xl">Email has been confirmed!</h1>
        <p>
          Your email have confirmed! your can to login page by pressing button below.
        </p>
        <Button title="Accepted"/>
      </section>
    </main>
  )
}

export default ConfirmEmail