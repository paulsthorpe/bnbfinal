@extends('admin.panel.admin_template')

@section('title')
Applications
@endsection

@section('admin_content')
<section class="content-header">
  <h1>
    View All Applications
  </h1>
</section>
<div class="well">
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone #</th>
          <th>Submitted On</th>
          <th style="width: 40px;"></th>
        </tr>
      </thead>
      <tbody class="table-striped">
        <tr class="success">
          <td>1</td>
          <td>Mark</td>
          <td>Tompson</td>
          <td>the_mark7</td>
          <td class="text-center">
            <a class='btn btn-primary btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> View</a>
          </td>
          <td class="text-center">
            <a class='btn btn-success btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Mark </a>
          </td>
          <td>
            <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a>
           </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ashley</td>
          <td>Jacobs</td>
          <td>ash11927</td>
          <td class="text-center">
            <a class='btn btn-primary btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a>
          </td>
          <td>
            <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a>
           </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Audrey</td>
          <td>Ann</td>
          <td>audann84</td>
          <td class="text-center">
            <a class='btn btn-primary btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a>
          </td>
          <td>
            <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a>
           </td>
        </tr>
        <tr>
          <td>4</td>
          <td>John</td>
          <td>Robinson</td>
          <td>jr5527</td>
          <td class="text-center">
            <a class='btn btn-primary btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a>
          </td>
          <td>
            <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a>
           </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Aaron</td>
          <td>Butler</td>
          <td>aaron_butler</td>
          <td class="text-center">
            <a class='btn btn-primary btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a>
          </td>
          <td>
            <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a>
           </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Chris</td>
          <td>Albert</td>
          <td>cab79</td>
          <td class="text-center">
            <a class='btn btn-primary btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a>
          </td>
          <td>
            <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a>
           </td>
        </tr>
      </tbody>
    </table>
</div>

@endsection

<!--

.custab{
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5% 0;
    box-shadow: 3px 3px 2px #ccc;
    transition: 0.5s;
    }
.custab:hover{
    box-shadow: 3px 3px 0px transparent;
    transition: 0.5s;
    } -->
