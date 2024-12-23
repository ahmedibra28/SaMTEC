import { YouTubeEmbed } from '@next/third-parties/google'

export function Video({ videoid }: { videoid: string }) {
  return <YouTubeEmbed videoid={videoid} height={300} width={450} />
}
