import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
// import Sketch from "react-p5";
import loadable from "@loadable/component"

const Sketch = loadable(() => import("react-p5"))

const between = (x, min, max) =>  x >= min && x <= max

function isOverGridPoint (mouseX, mouseY, x, y) {
  return (between(mouseX, x-10, x+10) && between(mouseY, y-10, y+10))
    ? true
    : false
}
const Background = (props) => {
  let canvas
  let cols = 20
  let rows = 10
  let spots = []
  const windowResized = (p5) => p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  const lineThresh = 30
  let color = "#2b1b69"
  // let color = "#af3242"

  function Spot(p5, x, y) {
    let _x = x
    let _y = y
    let _r = 2
    let opacity = 255
    let hovered = false

    function display() {
      p5.noStroke()
      p5.fill(color)
      p5.ellipse(_x, _y, _r)
    }

    function fade() {
      if (_r >= 0) {
        _r -= 1
      } else {
        hovered = false
      }
    }

    function flash() {
        _r = 80
        hovered = true
    }

    function randomWalk() {
      _x += p5.random(-1,1)
      _y += p5.random(-1,1)
    }

    function values () {
      return {
        _x,
        _y,
        hovered,
      }
    }

    return {
      display,
      flash,
      randomWalk,
      values,
      fade,
    }
  }

  const setup = (p5, canvasParentRef) => {
    // p5.pixelDensity(1);
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight /*, p5.WEBGL*/).parent(canvasParentRef)
    const colWidth = (p5.width / cols)
    const colHeight = (p5.height / rows)
    canvas.position(0, 0)
    canvas.style('z-index', '-1')
    p5.background(0);
    for (let x = 0; x < cols+1; x++) {
      for (let y = 0; y < rows+1; y++) {
        spots.push(Spot(p5, x * colWidth, y * colHeight))
      }
    }
  }

  const draw = (p5) => {
    p5.background(0)
    // p5.translate(-p5.width / 2, -p5.height / 2,0);
    p5.strokeWeight(3)
    spots.forEach((s, i) => {
      let { _x, _y, hovered } = s.values()
      s.randomWalk()
      s.display()
      if (i !== 0 && isOverGridPoint(p5.mouseX, p5.mouseY, _x, _y)) s.flash() 
      hovered && s.fade()

      spots.forEach(ref => {
        if (between(_x, ref.values()._x-lineThresh, ref.values()._x+lineThresh) && between(_y, ref.values()._y-lineThresh, ref.values()._y+lineThresh)) {
          p5.stroke(color)
          p5.line(_x, _y, ref.values()._x, ref.values()._y)
        }
      })

    })
  };
  return <Sketch windowResized={windowResized} setup={setup} draw={draw} />
}

const IndexPage = () => {
  return (
    <div>
      <Background />
      <Layout>
        <div className="max-w-lg">
          <p className="mt-16 mb-4 text-6xl">Hey!</p>
          <p className="text-4xl">I'm a Berlin based web developer with a passion for music.</p>
          <p className="text-4xl">I love creating stuff with
            <Link className="text-gray-600" to='/code'> code</Link>, making
            <Link className="text-gray-600" to='/code'> music</Link> and taking
            <Link className="text-gray-600" to='/code'> pics</Link>.
          </p>
          <p className="text-4xl">You can find me on twitter, soundcloud and instagram.</p>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage