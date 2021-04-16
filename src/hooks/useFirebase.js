import { useEffect, useState } from "react"

// Utils
import getFirebase from "../utils/firebase"

export default function useFirebase() {
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    setInstance(getFirebase())
  }, [])

  return instance
}
