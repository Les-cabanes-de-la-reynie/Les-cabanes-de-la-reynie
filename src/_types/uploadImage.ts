export enum UploadImageCategoryKeyEnum {
  HomeSlider = 'homeSlider',
  YurtSlider = 'yurtSlider',
  HutSlider = 'hutSlider'
}

export type UploadImage = {
  id: string
  imageKey: string
  imageUrl: string
  category: string
}

export type DeleteUploadImage = Pick<UploadImage, 'id' | 'imageKey'>
