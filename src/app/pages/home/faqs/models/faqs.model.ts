export interface FaqsModel {
  items: Array<{
    id: string,
    question: string,
    answer: string,
    productId: string,
    tags: Array<string>
  }>
}
