import { promises as fs } from "fs"
import { NextResponse } from "next/server"

export async function GET() {

  console.log("Alguém chamou o GET ai?")

  // isso vai entrar no arquivo JSON -> aqui esta sendo criado uma API fake
  // busca os dados do aquivo e guarda dentro de file
  const file = await fs.readFile(process.cwd() + 'src/data/base.json', 'utf-8')

  // converte o arquivo em JSON e guarda em produtos
  const produtos = JSON.parse(file)

  return NextResponse.json(produtos);
  
}