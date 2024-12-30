'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        containerRef.current.appendChild(renderer.domElement)

        const geometry = new THREE.IcosahedronGeometry(1, 1)
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            wireframe: true,
            side: THREE.DoubleSide,
        })

        const icosahedron = new THREE.Mesh(geometry, material)
        scene.add(icosahedron)

        const light = new THREE.PointLight(0xffffff, 1, 100)
        light.position.set(0, 0, 10)
        scene.add(light)

        camera.position.z = 5

        const animate = () => {
            requestAnimationFrame(animate)

            icosahedron.rotation.x += 0.005
            icosahedron.rotation.y += 0.005

            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            const width = window.innerWidth
            const height = window.innerHeight

            camera.aspect = width / height
            camera.updateProjectionMatrix()

            renderer.setSize(width, height)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            containerRef.current?.removeChild(renderer.domElement)
        }
    }, [])

    return <div ref={containerRef} className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500" />
}

