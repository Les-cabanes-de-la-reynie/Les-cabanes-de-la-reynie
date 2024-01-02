export enum UploadImageCategoryKeyEnum {
  YurtHeader = 'yurtHeader',
  YurtSlider = 'yurtSlider',
  HutHeader = 'hutHeader',
  HutSlider = 'hutSlider'
}

export type UploadImage = {
  id: string
  imageKey: string
  imageUrl: string
  category: string
}
