#pragma strict

var rb: Rigidbody;
var jump : boolean = false;
var JumpInitialVelocity : float = 2.0;

function Start () {
	rb = GetComponent.<Rigidbody>();
}

function Update () {
	var x : float = Input.GetAxis("Horizontal");
	if(!jump && Input.GetButtonDown("Jump")){
		jump = true;
		rb.velocity.y += JumpInitialVelocity;
		rb.velocity = Vector3(0, 10, 0);
	};
	var z : float = Input.GetAxis("Vertical");
	transform.Translate(Vector3(x * 0.15, 0, z * 0.15), Space.World);
}

function OnCollisionEnter (collision: Collision) {
	if (collision.gameObject.name == "Ground"){
		jump = false;
	}
}