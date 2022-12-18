import Image from 'next/image'

import realReturnsLogo from "@/images/Untitled.png"

export function Logomark(props) {
  return (
    <Image src={realReturnsLogo} alt="Real Returns" {...props} />
  )
}

export function Logo(props) {
  return (
    <Logomark width="80" className="fill-cyan-500" />
  )
}
