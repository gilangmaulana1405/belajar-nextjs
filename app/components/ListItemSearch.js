import Link from "next/link"
import Image from "next/image"

const ListItemSearch = ({ name, imageUrl,repoUrl }) => {
    return (
    <div className="inline-flex w-full space-x-3 my-4">
        <Image src={imageUrl}  width={40} height={40} className="rounded-full border-zinc-100 border-2" />
        <div>
        <p className="text-lg font-semibold"><Link href={`/cari/${name}`}>{name}</Link></p>
        <p className="text-sm hover:text-blue-600"><Link href={`${repoUrl}`}>Lihat Repository</Link> </p>
        </div>
    </div>
    )
    
}

export default ListItemSearch

