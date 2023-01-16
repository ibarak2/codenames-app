// import { selectCount } from "../store/counter/counter.reducer"
// import { useAppDispatch, useAppSelector } from "../store/counter/hooks"
// import { increment,incrementByAmount } from '../store/counter/counter.reducer'

export const HomePage = () => {
  // const count = useAppSelector(selectCount)
  // const dispatch = useAppDispatch()

  return (
    <div className="flex column align-center homepage-wrapper">
      <h1>CODENAMES</h1>
      <section className="flex column homepage-btns">
        <button>CREATE ROOM</button>
        <button>JOIN ROOM</button>
      </section>
    </div>
  )
}
