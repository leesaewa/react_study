## label JSX

- `label`을 html에서는 아래처럼 사용하는 게 보통임.

```
<label for="minutes">Minutes</label>
<input id="minutes" placeholder="Minutes" type="number" />
<label for="hours">Hours</label>
<input id="hours" placeholder="Hours" type="number" />
```

- 하지만 `react.development`로 확인하면 `Warning: Invalid DOM property "for". Did you mean "htmlFor"?` 라는 에러가 뜸.

### JSX에서는 사용할 수 없는 이유.

- `class`나 `for` 같이 *JavaScript에서 선점된 문법 용어*를 사용 못함.
- `class`는 `className` `for`는 `htmlFor`로 바꿔씀.

```
<h1 className="hi">Super Converter</h1>
<label htmlFor="minutes">Minutes</label>
```

## react development

- production은 배포 모드, development는 개발 모드를 의미함.
  <a href="https://ui.toast.com/weekly-pick/ko_20191212">개발(Development) 모드 참고 URL</a>
