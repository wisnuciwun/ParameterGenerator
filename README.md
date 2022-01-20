# ParameterGenerator &#x1F34E;

```diff
+ Short Documentation
```

:rice: Requirement :
- put to your working project
- use Axios or Fetch and also you can use dummy api on the internet to testing the api worked properly or not


:eyes: Usage :
- Put this file to your helper directory folder. You can choose to make a new folder or not.
- import this function to help you make Query Param by completing object values. Only valued variable will become a query param.

:phone: Parameters :
- obj = object that will translated to variable and value of query param

:paperclip: Example :
``js
ParameterGenerator({obj: {
  quantity: "",
  brandShoes: "Masterpiece",
  shoesSize: "27",
}})
// example result : &brandShoes="Masterpiece"&shoesSize="27"&
``

:camera: Preview :
try and you will see magic happen :)
