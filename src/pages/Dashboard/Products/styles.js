import styled from "styled-components"

export const ProductDiv = styled.div`
	
	.heading_btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 50px 0;

		.heading_btn-left {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.btn {
				margin-right: 30px;
			}
		}

		.heading_btn-right {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.btn:first-child {
				margin-right: 0px;
			}
		}
	}

	table.table {
	font-size: 0.9rem;

	.action_url {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	a {
		text-decoration: none;

		&.link {
			color: #bb2227;
			font-weight: 600;
		}

		&.link-dark {
			color: rgba(0, 0, 0, 0.8);
			font-weight: 600;
		}

		&.anchor {
			background-color: #bb2227;
			color: #ffffff;
			font-size: 0.8rem;
			padding: 3px 6px;
			border-radius: 2px;
		}
	}
}
`
