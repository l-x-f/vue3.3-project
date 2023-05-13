export interface Props {
  label: string
}

export interface Emits {
  (e: 'blur', value: string): void
}

export interface Slots {
  default?: (props: { msg?: string }) => any
}
