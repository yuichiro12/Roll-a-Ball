#pragma strict

var rb: Rigidbody;
var jump : boolean = false;
var JumpInitialVelocity : float = 2.0;

function Start () {
	rb = GetComponent.<Rigidbody>();
}

function Update () {
	var x : float = Input.GetAxis("Horizontal");
	var z : float = Input.GetAxis("Vertical");
	if(!jump && Input.GetButtonDown("Jump")){
		jump = true;
		rb.velocity.y += JumpInitialVelocity;
		rb.velocity = Vector3(x * 0.15 * (Time.deltaTime * 30), 10, z * 0.15 *  (Time.deltaTime * 30));
	};
	transform.Translate(Vector3(x * 0.15, 0, z * 0.15), Space.World);
}

function OnCollisionEnter (collision: Collision) {
	if (collision.gameObject.name == "Ground"){
		jump = false;
	}
}

function OnCollisionExit (collision: Collision) {
	if (collision.gameObject.name == "Ground"){
		jump = true;
	}
}