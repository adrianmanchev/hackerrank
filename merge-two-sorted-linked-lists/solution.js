function mergeLists (head1, head2) {
  const response = []
  while (head1) {
      response.push(head1.data)
      head1 = head1.next
  }
  while (head2) {
      response.push(head2.data)
      head2 = head2.next
  }
  return {
      data: response.sort((x, y) => x - y).join(' '),
      next: null
  }
}
