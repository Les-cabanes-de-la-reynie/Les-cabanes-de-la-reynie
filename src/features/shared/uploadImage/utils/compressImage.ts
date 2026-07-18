import imageCompression from 'browser-image-compression'

export const compressImage = async (file: File): Promise<File> => {
  try {
    const compressed = await imageCompression(file, {
      maxWidthOrHeight: 2048,
      initialQuality: 0.82,
      fileType: 'image/webp',
      useWebWorker: true
    })

    if (compressed.size >= file.size) return file

    return new File([compressed], file.name.replace(/\.[^.]+$/, '.webp'), {
      type: 'image/webp'
    })
  } catch {
    return file
  }
}
