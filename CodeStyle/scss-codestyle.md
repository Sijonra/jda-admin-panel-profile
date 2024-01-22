# SCSS code style

# 1. all classes should be named on english words (NOT using transliteration!!!)

# 2. after any selector or media query there should be an empty line (except when the media query are next to each other)

### correct code example

```scss
.selector {
	@include font;
	font-size: 20px;
	line-height: 20px;

	&-children {
		background: red;
	}

	@media (max-width: 1200px) {
		font-size: 18px;
	}
	@media (max-width: 768px) {
		font-size: 14px;
	}
}
```

### incorrect code example

```scss
.selector {
	@include font;
	font-size: 20px;
	line-height: 20px;
	&-children {
		background: red;
	}
	@media (max-width: 1200px) {
		font-size: 18px;
	}

	@media (max-width: 768px) {
		font-size: 14px;
	}
}
```

# 3. use mixin @include font for styling font-family:

### correct code example

```scss
.selector {
	@include font;
}
```

### incorrect code example

```scss
.selector {
	font-family: 'my-font';
}
```

# 4. if selector includes font styles there should be at the start of block in the following order:

### correct code example

```scss
.selector {
	@include font;
	font-size: 14px;
	font-weight: 600;
	line-height: 12px;
	letter-spacing: 2px;
	color: black;
}
```

# 5. use mixin list-reset before styling list <ul></ul>

### correct code example

```scss
.selector {
	@include list-reset;
}
```

### incorrect code example

```scss
.selector {
	margin: 0;
	padding: 0;
	text-decoration: none;
}
```

# 6. use mixin link-reset before styling link tag <a></a>

### correct code example

```scss
.selector {
	@include link-reset;
}
```

### incorrect code example

```scss
.selector {
	margin: 0;
	padding: 0;
	list-style: none;
}
```

# 7. media query should ONLY be inside of selector

### correct code example

```scss
.selector1 {
	font-size: 14px;
	color: blue;

	@media (max-width: 900px) {
		width: 100%;
	}

	.selector2 {
		background-color: yellow;
		width: 200px;

		@media (max-width: 900px) {
			width: 100%;
		}
	}
}
```

### incorrect code example

```scss
.selector1 {
	font-size: 14px;
	color: blue;

	.selector2 {
		background-color: yellow;
		width: 200px;
	}
}

@media (max-width: 900px) {
	.selector1 {
		width: 100%;

		.selector2 {
			width: 100%;
		}
	}
}
```
