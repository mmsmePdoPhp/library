<?php
header('Content-type: application/json');

$base=array();
$sub=array();

foreach ($data['Links'] as $key => $value) {
    array_push($base, array(
     'aid' => $value->aid,
     'a_id' => $value->a_id,
     'aname' => $value->aname,
     'ahref' => $value->ahref
    ));
    
    array_push($sub, array(
     'nid' => $value->nid,
     'n_id' => $value->n_id,
     'nname' => $value->nname,
     'nhref' => $value->nhref
    ));
    

 
}
//remove doublicate value form array
function unique_multidim_array($array, $key)
{
    $temp_array = array();
    $i = 0;
    $key_array = array();
   
    foreach ($array as $val) {
        if (!in_array($val[$key], $key_array)) {
            $key_array[$i] = $val[$key];
            $temp_array[$i] = $val;
        }
        $i++;
    }
    return $temp_array;
}
$base = unique_multidim_array($base, 'aid');

$result =array(array());

foreach ($base as $key => $value) {
    $result[$key][0]=array(
        'name'=>$value['aname'],
        'href'=>$value['ahref']
    );
    foreach ($sub as $k => $v) {
        if ($value['aid']==$v['n_id']) {
            $result[$key][$k+1]=array(
            'name'=>$v['nname'],
            'href'=>$v['nhref']
        );
        }
    }
}


print_r(json_encode($result));
