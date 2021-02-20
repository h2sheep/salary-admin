import { FieldsetHTMLAttributes } from "vue"

export function postFile(key:string, query: FileList): FormData {
  const params = new FormData()

  for (let i = 0; i < query.length; i++) {
    params.append(key, query[i])
  }

  return params
}