export enum UploadImageCategoryKeyEnum {
  HomeSlider = 'homeSlider',
  YurtSlider = 'yurtSlider',
  HutSlider = 'hutSlider'
}

export type UploadImageEntity = {
  id: string
  imageKey: string
  imageUrl: string
  category: string
}

export type DeleteUploadImage = Pick<UploadImageEntity, 'id' | 'imageKey'>
