import Image from 'next/image'

const avatars = [
  { src: '/assets/avatar-1.jpg', alt: 'Madre satisfecha' },
  { src: '/assets/avatar-2.jpg', alt: 'Padre satisfecho' },
  { src: '/assets/avatar-3.jpg', alt: 'Madre joven satisfecha' },
  { src: '/assets/avatar-4.jpg', alt: 'Padre satisfecho' },
  { src: '/assets/avatar-5.jpg', alt: 'Madre satisfecha' },
]

export function AvatarStack({ label = '+1000 familias transformadas' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex -space-x-3">
        {avatars.map((a) => (
          <Image
            key={a.alt + a.src}
            src={a.src}
            alt={a.alt}
            width={48}
            height={48}
            className="h-9 w-9 rounded-full border-2 border-background object-cover shadow-md ring-1 ring-black/5"
          />
        ))}
      </div>
      <p className="text-sm font-semibold text-foreground/80">{label}</p>
    </div>
  )
}
