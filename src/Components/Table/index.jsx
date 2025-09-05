function TableComponent({ data }) {
  if (!data || data.length === 0) return "On Data";

  return (
    <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Payment</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.payment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
