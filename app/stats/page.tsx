import Icon from '@/components/Icon'

export default function Stats() {
  return (
    <div className="flex items-center gap-3">
      <Icon icon="Back" className="w-6 h-6 text-neutral-700" />
      <Icon icon="More" className="w-6 h-6 text-neutral-700" />
      <Icon icon="ChevronDown" className="w-5 h-5 text-neutral-500" />
    </div>
  )
}
