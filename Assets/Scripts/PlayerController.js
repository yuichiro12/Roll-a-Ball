#pragma strict

function Start () {

}

function Update () {
	var x : float = Input.GetAxis("Horizontal");
	var z : float = Input.GetAxis("Vertical");
	transform.Rotate(Vector3(z * 10, 0, x * -10), Space.World);
}