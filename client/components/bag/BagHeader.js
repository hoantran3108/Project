import React from 'react'
import { Table } from 'semantic-ui-react'

const BagHeader = () => (
  <Table.Header>
    <Table.Row>
      {headers.map((header, i) => <Table.HeaderCell key={i}>{header}</Table.HeaderCell>)}
    </Table.Row>
  </Table.Header>
)

const headers = ['Remove', 'Image', 'Product Name', 'Unit Price', 'Quantity', 'Subtotal']

export default BagHeader
