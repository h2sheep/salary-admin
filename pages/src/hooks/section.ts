import { addSection, deleteSection, updateSection } from "@/network/section"
import { INewSectionRow, ISectionRow, ISuccessAdd, ISuccessModify } from "@/typings/section"
import { reactive } from "vue"

interface IResult {
  code: number
  message: string
}

export interface IUseSection {
  add: (newSection: INewSectionRow) => void
  remove: (sectionid: string) => void
  update: (section: ISectionRow) => void 
}


export function useSection(data: ISectionRow[]): IUseSection {


  // 添加
  const add = async (newSection: INewSectionRow) => {
    const result = await addSection<ISuccessAdd>(newSection)
    data.push(result.data)
  }

  // 删除
  const remove = async (sectionid: string) => {
    const result = await deleteSection<ISuccessModify>(sectionid)
    if (result.code === 0) {
      const index = data.findIndex((item: ISectionRow) => item._id === sectionid)
      data.splice(index, 1)
    }
  }

  // 修改
  const update = async (section: ISectionRow) => {
    const result = await updateSection<ISuccessModify>(section)
    if (result.code === 0) {
      const index = data.findIndex((item: ISectionRow) => item._id === section._id)
      const item = data[index]
      item.name = section.name
      item.count = section.count
    }
  }


  return {
    add,
    remove,
    update,
  }
}