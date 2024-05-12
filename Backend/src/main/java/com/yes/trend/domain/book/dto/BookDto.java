package com.yes.trend.domain.book.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

public class BookDto {

	@Getter
	@SuperBuilder
	@NoArgsConstructor
	public static class Response {
		private Integer bookId;
		private Integer productId;
		private String productName;
		private String categoryName;
		private String searchKeyword;
		private Integer totalClickCount;
		private Integer totalOrderCount;
		private Integer totalOrderAmount;
		private Integer salePrice;
		private String contents;
		private Integer totalPurchaseCount;

		public Response(Integer bookId, Integer productId, String productName, String categoryName,
			String searchKeyword,
			Integer totalClickCount, Integer totalOrderCount, Integer totalOrderAmount, Integer salePrice,
			String contents,
			Integer totalPurchaseCount) {
			this.bookId = bookId;
			this.productId = productId;
			this.productName = productName;
			this.categoryName = categoryName;
			this.searchKeyword = searchKeyword;
			this.totalClickCount = totalClickCount;
			this.totalOrderCount = totalOrderCount;
			this.totalOrderAmount = totalOrderAmount;
			this.salePrice = salePrice;
			this.contents = contents;
			this.totalPurchaseCount = totalPurchaseCount;
		}
	}

}