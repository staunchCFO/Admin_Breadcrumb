import React, { useState } from "react"
import { Button } from "reactstrap"
import { datas } from "../../../data/head"
import { ProductDiv } from "./styles"

const Product = () => {

	const editHandler = () => {
		
	}

	const deleteHandler = () => {

	}

	return (
		<ProductDiv>
			<div className="container">
				<div className="">
					<div className="heading_btn">
						<div className="heading_btn-left">
							<Button
								color="primary"
								outline
							> Head </Button>
							<Button
								color="primary"
								outline
							> Product </Button>
						</div>
						<div className="heading_btn-right">
							<Button
								color="primary"
								outline
							> Add Item </Button>
						</div>
					</div>
				</div>

				<div className="table-responsive">
					<table className="table table-bordered table-striped">
						<thead className="table-primary">
							<tr>
								<th>Index</th>
								<th>Type</th>
								<th>Title</th>
								<th>Description</th>
								<th>Actions</th>
							</tr>
						</thead>
							
						<tbody>
							{datas.map((data, i) => (
								<tr key={data.id}>
									<td>{data.id}</td>
									<td>{data.type}</td>
									<td>{data.title}</td>
									<td>{data.description.substr(0, 70)}</td>
									<td className="action_url">
										<a
											href="#/"
											className="me-3 link-dark"
											onClick={(e) =>
												editHandler(
													e,
													data
												)
											}
										>
											Edit
										</a>
										<a
											href="#/"
											className="me-3 link-dark"
											onClick={(e) =>
												deleteHandler(
													e,
													data
												)
											}
										>
											Delete
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</ProductDiv>
	)
}

export default Product
