# JSX code style

# 1. all jsx components should be created using react function components (except for exceptions when classes are absolutely necessary)

# 2. You must use typescript typing (WITHOUT unreasonable use of the "any" type)

# 3. You should use ONLY scss modules (NO regular css files)

# 4. You should use react-classnames package to pass a class to your tag

### correct code example

```jsx
import style from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function myComponent() {
	return (
		<div className={cx('container')}>
			<h1 className={cx('container__heading')}>heading</h1>
		</div>
	);
}
```
