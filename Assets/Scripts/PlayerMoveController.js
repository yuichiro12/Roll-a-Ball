#pragma strict

function Start () {

}

function Update () {
	var x : float = Input.GetAxis("Horizontal");
	var y : float = Input.GetAxis("Jump");
	var z : float = Input.GetAxis("Vertical");
	transform.Translate(Vector3(x * 0.15, y, z * 0.15), Space.World);
}