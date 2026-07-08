from playwright.sync_api import sync_playwright
import time
import subprocess
import os

# Ensure server is running
print("Starting next.js server...")
server_process = subprocess.Popen(["npm", "run", "start"])
time.sleep(5) # wait for server to start

try:
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # Desktop Mobile
        context = browser.new_context(viewport={'width': 375, 'height': 812})
        page = context.new_page()
        page.goto("http://localhost:3000")
        time.sleep(2)
        page.screenshot(path="home_hero_mobile.png", full_page=True)

        browser.close()
finally:
    server_process.terminate()
    print("Done")